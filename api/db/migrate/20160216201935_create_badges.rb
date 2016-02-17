class CreateBadges < ActiveRecord::Migration
  def change
    create_table :badges do |t|
      t.string :body
      t.references :student

      t.timestamps null: false
    end
  end
end
