const AWS = require("aws-sdk")

const dynamodb = new AWS.DynamoDB.DocumentClient()

exports.handler = async (event) => {

const body = JSON.parse(event.body)

const params = {
TableName: "PasswortManagerDB",
Item: {
id: Date.now().toString(),
website: body.website,
username: body.username,
password: body.password
}
}

await dynamodb.put(params).promise()

return {
statusCode: 200,
body: JSON.stringify({message:"saved"})
}

}