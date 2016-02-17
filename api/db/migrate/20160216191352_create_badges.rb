class CreateBadges < ActiveRecord::Migration
  def change
    create_table :badges do |t|
      t.string :body
      t.references :user, index: true, foreign_key: true
    end
  end
end
