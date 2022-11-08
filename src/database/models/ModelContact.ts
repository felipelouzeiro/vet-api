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
  tableName: 'contact',
})
export class Contact extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  phone!: string

  @ForeignKey(() => Tutor)
  @Column({ allowNull: false })
  tutorId!: number

  @BelongsTo(() => Tutor)
  tutor!: Tutor
}
