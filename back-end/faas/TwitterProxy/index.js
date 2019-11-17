/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */

var Twit = require("twit");

var T = new Twit({
  consumer_key: "RY3VPWxWmZs0NQmGd6DKCZOwy",
  consumer_secret: "FSaaes5tHil24yW83MJr2f8Aj3tafa5rbjU8zfZUcFbngGGdMU",
  access_token: "1179519797857587200-Cf9YNEEGSqVj69kZqZJFzmeh18wj6H",
  access_token_secret: "LaMpZJVA2onGYIXedbRxZDpsmt6QOXD8OqTBErI2MB8vg",
  timeout_ms: 60 * 1000, // optional HTTP request timeout to apply to all requests.
  strictSSL: true // optional - requires SSL certificates to be valid.
});

exports.tweets = (req, res) => {
  T.get("search/tweets", { q: "#backtonature", count: 100 }, function(
    err,
    data,
    response
  ) {
    res.status(200).send(data);
  });
};
