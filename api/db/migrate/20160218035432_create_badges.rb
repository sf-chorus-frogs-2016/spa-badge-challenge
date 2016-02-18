class CreateBadges < ActiveRecord::Migration
  def change
    create_table :badges do |t|
      t.belongs_to :student, index: true
      t.text :text
      t.integer :vote_count

      t.timestamps null: false
    end
  end
end
