const campaign_creator = require("../models/campaign_creator");

module.exports = async () => {
  const admin = require("../models/admin");
  const campaign_creator = require("../models/campaign_creator");
  const moderator = require("../models/moderator");
  const role = require("../models/admin");

  //relations betwen tables

  const role_ = await role
    .create({ username: "deault", password: "123456789" })
    .catch(errHandler);
  const admin_ = await admin.create();
  const moderator_ = await moderator.create();
  const campaign_creator_ = await campaign_creator.create();

  //ferch details from databases
};
