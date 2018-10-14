class CreateEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.string :title, null: false
      t.string :location, null: false
      t.text :body, null: false
      t.datetime :date_time, null: false
      t.integer :group_id, null: false
      t.integer :user_id, null: false
      t.timestamp
    end
    add_index :events, :group_id
    add_index :events, :user_id
  end
end
