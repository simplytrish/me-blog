#Adding validations for post creation
#1. Set that title must be added and the min length is 5 characters
#2. Set that body text must be added
class Post < ActiveRecord::Base
	has_many :comments, dependent: :destroy
	validates :title, presence: true, length: {minimum: 5}
	validates :body, presence: true
	mount_uploader :cover, CoverUploader
end

