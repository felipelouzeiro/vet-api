import { Table, Model, Column, DataType, HasMany } from 'sequelize-typescript'

@Table({
  timestamps: false,
  tableName: 'tutors',
})
export class Tutor extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name!: string
}
