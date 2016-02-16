class CreateBadges < ActiveRecord::Migration
  def change
    create_table :badges do |t|
      t.string :sentence
      t.integer :votes
      t.references :person, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
