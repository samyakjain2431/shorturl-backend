const mongoose = require('mongoose');

const CollectionSchema = new mongoose.Schema({
  collectionName: { type: String, required: true },
  isPublic: { type: Boolean, default: false },
  // A unique link or identifier to share this collection
  collectionLink: { type: String, unique: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  // Optional: you can store array of short URLs here if you want
  shortUrls: [{ type: mongoose.Schema.Types.ObjectId, ref: 'ShortUrl' }],
}, { timestamps: true });

module.exports = mongoose.model('Collection', CollectionSchema);
