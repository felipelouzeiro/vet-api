import { Table, Model, Column, DataType, HasMany } from 'sequelize-typescript'
import { Address } from './ModelAddress'
import { Contact } from './ModelContact'

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

  @HasMany(() => Address)
  addresses!: Address[]

  @HasMany(() => Contact)
  contacts!: Contact[]
}
