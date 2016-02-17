class CreateBadges < ActiveRecord::Migration
  def change
    create_table :badges do |t|
      t.integer :student_id
      t.string :text
      t.integer :votes

      t.timestamps null: false
    end
  end
end
