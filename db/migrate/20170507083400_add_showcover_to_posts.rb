class AddShowcoverToPosts < ActiveRecord::Migration
  def change
    add_column :posts, :showcover, :string
  end
end
