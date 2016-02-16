class CreateStudents < ActiveRecord::Migration
  def change
    create_table :students do |t|
      t.name :string
      
      t.timestamps null: false
    end
  end
end
