# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1)This line is estabishing the BlogPostsController class as a child of the ApplicationController class. This is done so that the BlogPostsController class can inherit all of the methods and attributes of the ApplicationController class.
class BlogPostsController < ApplicationController
  def index
    # ---2)This line is creating an instance variable called @posts that is equal to all of the BlogPost objects in the database.
    @posts = BlogPost.all
  end

  # ---3)This line is creating a method called show that will find a specific BlogPost object in the database based on the id that is passed in as a parameter. The method will then create an instance variable called @post that is equal to the BlogPost object that was found.
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4)This line is creating a method called new that will create a new BlogPost object.
  def new
    @post = BlogPost.new
  end

  def create
    # ---5)This line is creating a new BlogPost object and passing in the blog_post_params method as a parameter. The blog_post_params method is a private method that is defined at the bottom of the file. 
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def edit
    # ---6)This line is creating an instance variable called @post that is equal to a specific BlogPost object in the database based on the id that is passed in as a parameter.
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7)This line is updating the BlogPost object that was found in the edit method with the parameters that are passed in from the blog_post_params method. The blog_post_params method is a private method that is defined at the bottom of the file. 
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      # ---8)This line is redirecting the user to the index page of the blog_posts controller.
      redirect_to blog_posts_path
    end
  end

  # ---9)This line is creating a private method called blog_post_params that will return the parameters that are passed in from the create and update methods. The private method is used to prevent the method from being called outside of the class.
  private
  def blog_post_params
    # ---10)This line is requiring the blog_post parameter and permitting the title and content parameters to be passed in.
    params.require(:blog_post).permit(:title, :content)
  end
end
