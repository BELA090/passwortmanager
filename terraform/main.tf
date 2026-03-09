provider "aws" {
  region = "us-east-1"
}

# zufällige ID für eindeutige Namen
resource "random_id" "suffix" {
  byte_length = 4
}

# S3 Bucket für Website
resource "aws_s3_bucket" "frontend_bucket" {
  bucket = "passwortmanager-bela090-${random_id.suffix.hex}"
}

# Static Website Hosting
resource "aws_s3_bucket_website_configuration" "frontend_config" {
  bucket = aws_s3_bucket.frontend_bucket.id

  index_document {
    suffix = "index.html"
  }
}

# DynamoDB Tabelle
resource "aws_dynamodb_table" "password_table" {

  name = "PasswortManager-${random_id.suffix.hex}"

  billing_mode = "PAY_PER_REQUEST"
  hash_key     = "id"

  attribute {
    name = "id"
    type = "S"
  }
}