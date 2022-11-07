import {
  Table,
  Model,
  Column,
  DataType,
  BelongsTo,
  ForeignKey,
} from 'sequelize-typescript'
import { Tutor } from './ModelTutor'

@Table({
  timestamps: false,
  tableName: 'address',
})
export class Address extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name!: string

  @ForeignKey(() => Tutor)
  @Column
  tutorId!: number

  @BelongsTo(() => Tutor)
  tutor!: Tutor
}
