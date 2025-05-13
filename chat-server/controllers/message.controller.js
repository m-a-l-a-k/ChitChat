import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";

// POST / send message
export const sendMessage = async (req, res) => {
    try {
        const {message} = req.body;
        const { id: receiverId } = req.params;
        const senderId = req.user._id;

        let conversation = await Conversation.findOne({
            participants: { $all: [senderId, receiverId] },
        })

        if (!conversation) {
            conversation = await Conversation.create({
                participants: [senderId, receiverId],
            })
        }

        const newMessage = new Message({
            senderId,
            receiverId,
            message,
        })

        if(newMessage) {
            conversation.messages.push(newMessage._id);
        }

        // SOCKET.IO FUNCTIONALITY HERE

        // running save in parallel
        await Promise.all([conversation.save(), newMessage.save()])

        res.status(201).json(newMessage);

    } catch (error) {
        console.log("Error in sendMessage controller: ", error.message)
        res.status(500).json({ error: "Internal server error "});
    }
}

// GET messages between self and other user
export const getMessages = async (req, res) => {
    try {
        const {id:userToChatId} = req.params;
        const senderId = req.user._id;

        const conversation = await Conversation.findOne({
            participants: { $all: [senderId, userToChatId] },
        }).populate("messages");

        if (!conversation) return res.status(200).json([]);

        const messages = conversation.messages
        .filter(msg => {
            return !msg.deletedFor.includes(senderId)
        })
        .map(msg => {
            if (msg.isDeleted) {
                return {
                    ...msg.toObject(),
                    message: "This message was deleted."
                };
            }
            return msg;
        });

        res.status(200).json(messages);
    } catch (error) {
        console.log("Error in getMessages controller: ", error.message)
        res.status(500).json({ error: "Internal server error "});
    }
}

// DELETE message for me
export const deleteMessageForMe = async (req, res) => {
    try {
        const userId = req.user._id;
        const { id: messageId } = req.params;

        const message = await Message.findById(messageId);

        if (!message) {
            return res.status(404).json({ error: "Message not found." });
        }

        // duplicate prevention
        if (!message.deletedFor.includes(userId)) {
            message.deletedFor.push(userId);
            await message.save();
        }

        res.status(200).json({ message: "Message deleted for you." });

    } catch (error) {
        console.error("Error in deleteMessageForMe:", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
};

// DELETE message for everyone
export const deleteMessageForEveryone = async (req, res) => {
    try {
        const userId = req.user._id;
        const { id: messageId } = req.params;

        const message = await Message.findById(messageId);

        if (!message) {
            return res.status(404).json({ error: "Message not found." });
        }

        // only sender can delete for everyone
        if (!message.senderId.equals(userId)) {
            return res.status(403).json({ error: "You can only delete your own messages for everyone." });
        }

        message.isDeleted = true;
        message.message = "This message was deleted.";
        await message.save();

        res.status(200).json({ message: "Message deleted for everyone." });

    } catch (error) {
        console.error("Error in deleteMessageForEveryone:", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
};
