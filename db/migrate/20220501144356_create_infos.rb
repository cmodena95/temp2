class CreateInfos < ActiveRecord::Migration[6.1]
  def change
    create_table :infos do |t|
      t.string :header
      t.string :subheader
      t.string :title
      t.string :email
      t.string :phone
      t.string :location

      t.timestamps
    end
  end
end
