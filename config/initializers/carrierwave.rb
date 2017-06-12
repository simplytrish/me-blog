
  CarrierWave.configure do |config|
  config.fog_credentials = {
    :provider               => "AWS",                        # required
    :aws_access_key_id      => "AWS_KEY_ID",                        # required
    :aws_secret_access_key  => "AWS_KEY",                        # required
    :region                 => "asia pacific (tokyo)", 
    :endpoint               => "https://kande-bucket.s3-asia pacific (tokyo).amazonaws.com)"  # optional, defaults to 'us-east-1'
  }
  config.fog_directory  = 'kande-bucket'                     # required
  config.fog_public     = false                                   # optional, defaults to true
  config.fog_attributes = {'Cache-Control'=>'max-age=315576000'}  # optional, defaults to {}
end



#CarrierWave.configure do |config|
 #   config.dropbox_app_key = ENV["APP_KEY"]
  #  config.dropbox_app_secret = ENV["APP_SECRET"]
   # config.dropbox_access_token = ENV["ACCESS_TOKEN"]
    #config.dropbox_access_token_secret = ENV["ACCESS_TOKEN_SECRET"]
    #config.dropbox_user_id = ENV["USER_ID_DROPBOX"]
    #config.dropbox_access_type = "app_folder"
#end






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

