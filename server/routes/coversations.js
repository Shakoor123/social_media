const router = require("express").Router();
const Conversation = require("../models/Conversation");

//new conversation
router.post("/", async (req, res) => {
  const NewConversation = new Conversation({
    members: [req.body.senderId, req.body.receverId],
  });
  try {
    const savedConversation = await NewConversation.save();
    res.status(200).json(savedConversation);
  } catch (err) {
    res.status(500).json(err);
  }
});
//get conversation includes two ids
router.get("/find/:firstUserId/:secondUserId", async (req, res) => {
  try {
    const conversation = await Conversation.findOne({
      members: { $all: [req.params.firstUserId, req.params.secondUserId] },
    });
    if (conversation) {
      res.status(200).json(conversation);
    } else {
      res.status(500).json({ message: "not found" });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});
//delete conversation
router.delete("/:firstUserId/:secondUserId", async (req, res) => {
  try {
    const conversation = await Conversation.findOne({
      members: { $all: [req.params.firstUserId, req.params.secondUserId] },
    });
    await conversation.deleteOne();
  } catch (err) {
    res.status(500).json(err);
  }
});
//get coversation of a user
router.get("/:userId", async (req, res) => {
  try {
    const conversation = await Conversation.find({
      members: { $in: [req.params.userId] },
    });
    res.status(200).json(conversation);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
