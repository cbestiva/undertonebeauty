Cloudinary.config do |config|
  config.cloud_name = ENV["MY_CLOUD_NAME"]
  config.api_key = ENV["MY_API_KEY"]
  config.api_secret = ENV["MY_SECRET_KEY"]
  config.cdn_subdomain = true
end