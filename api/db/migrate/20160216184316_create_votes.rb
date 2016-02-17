class CreateVotes < ActiveRecord::Migration
  def change
    create_table :votes do |t|
      t.integer :student_id, null: false
      t.integer :badge_id, null: false
      t.integer :vote_value

      t.timestamps null: false
    end
  end
end
