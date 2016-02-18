class CreateBadges < ActiveRecord::Migration
  def change
    create_table :badges do |t|
      t.string :slogan
      t.integer :votes
      t.references :student


      t.timestamps null: false
    end
  end
end
