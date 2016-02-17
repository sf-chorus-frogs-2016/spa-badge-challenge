class CreateBadges < ActiveRecord::Migration
  def change
    create_table :badges do |t|
      t.integer :student_id, null: false
      t.string :text, null: false
      t.integer :vote_total, default: 0

      t.timestamps null: false
    end
  end
end
