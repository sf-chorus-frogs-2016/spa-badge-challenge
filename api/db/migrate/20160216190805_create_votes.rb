class CreateVotes < ActiveRecord::Migration

  def change
    create_table :votes do |t|
      t.integer :vote_type

      t.references :student
      t.references :post

      t.timestamps null: false
    end
  end

end
