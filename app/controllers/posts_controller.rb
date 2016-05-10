class PostsController < ApplicationController
	def index
		@posts = Post.all.order('created_at DESC')
	end

	def new
		@post = Post.new
	end

	#If-else, so that: If you click save and there is an error
	#and the post doesn't save, then render that create post page again.
	#Doing a render instead of redirect will keep all the indo you added
	#to the fields when creating the post.
	def create
		@post = Post.new(post_params)
		
		if @post.save
			redirect_to @post
		else
			render 'new'
		end
	end

	def show
		@post = Post.find(params[:id])
	end

	private
		def post_params
			params.required(:post).permit(:title, :body)
		end
end
