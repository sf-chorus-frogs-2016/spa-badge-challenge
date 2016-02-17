class CreateBadges < ActiveRecord::Migration
  def change
    create_table :badges do |t|
      t.references :person, index: true, foreign_key: true
      t.string :body
      t.integer :votes
      
      t.timestamps null: false
    end
  end
end
