class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.string :content
      t.references :student

      t.timestamps null: false
    end
  end
end
