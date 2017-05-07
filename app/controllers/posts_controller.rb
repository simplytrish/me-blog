class PostsController < ApplicationController
	before_action :authenticate_user!, except: [:index, :show]

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

	def edit
		@post = Post.find(params[:id])
	end

	def update
		@post = Post.find(params[:id])

			if @post.update(params[:post].permit(:title, :profile, :description, :body, :cover, :remove_cover, :recipe, :showcover))
				redirect_to @post
			else
				render 'edit'
			end
	end

	def destroy
		@post = Post.find(params[:id])
		@post.destroy

		redirect_to root_path
	end

	private
		def post_params
			params.require(:post).permit(:title, :profile, :description, :body, :cover, :remove_cover, :recipe, :showcover)
		end

end
