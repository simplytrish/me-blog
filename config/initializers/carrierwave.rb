
CarrierWave.configure do |config|
    config.dropbox_app_key = ENV["APP_KEY"]
    config.dropbox_app_secret = ENV["APP_SECRET"]
    config.dropbox_access_token = ENV["ACCESS_TOKEN"]
    config.dropbox_access_token_secret = ENV["ACCESS_TOKEN_SECRET"]
    config.dropbox_user_id = ENV["USER_ID_DROPBOX"]
    config.dropbox_access_type = "app_folder"
end



#  if Rails.env.development? || Rails.env.test?
#    CarrierWave.configure do |config|
#    config.storage = :file
#    end
#  end

#  if Rails.env.production?
#    CarrierWave.configure do |config|
#    config.storage = :dropbox

#    config.dropbox_app_key = ENV["APP_KEY"]
#    config.dropbox_app_secret = ENV["APP_SECRET"]
#    config.dropbox_access_token = ENV["ACCESS_TOKEN"]
#    config.dropbox_access_token_secret = ENV["ACCESS_TOKEN_SECRET"]
#    config.dropbox_user_id = ENV["USER_ID_DROPBOX"]
#    config.dropbox_access_type = "app_folder"
#    end
#  end

