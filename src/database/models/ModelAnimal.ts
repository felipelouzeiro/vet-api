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
  tableName: 'animals',
})
export class Animal extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name!: string

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  breed!: string

  @ForeignKey(() => Tutor)
  @Column({ allowNull: false })
  tutorId!: number

  @BelongsTo(() => Tutor)
  tutor!: Tutor
}
