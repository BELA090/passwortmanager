provider "aws" {
  region = "us-east-1"
}

resource "aws_s3_bucket" "frontend_bucket" {
  bucket = "passwortmanager-bela090-website-2026"
}

resource "aws_s3_bucket_website_configuration" "frontend_config" {
  bucket = aws_s3_bucket.frontend_bucket.id

  index_document {
    suffix = "index.html"
  }
}

resource "aws_dynamodb_table" "password_table" {

  name = "PasswortManagerDB3"

  billing_mode = "PAY_PER_REQUEST"
  hash_key = "id"

  attribute {
    name = "id"
    type = "S"
  }

}