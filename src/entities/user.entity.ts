import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn, } from 'typeorm';
import { Roles } from './roles.entity';
import { Repartidor } from './repartidor.entity';
import { Pedidos } from './pedidos.entity';
import { EstadoUser } from '../enums/estado.enum';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  apellido: string;

  @Column()
  identificacion: string;

  @Column({ nullable: true })
  email: string;

  @Column({ nullable: true })
  password: string;

  @Column({ nullable: true })
  telefono: string;

  @Column({ nullable: true })
  direccion: string;

  @Column({ nullable: true })
  foto: string;

  @Column({ type: 'enum', enum: EstadoUser, default: EstadoUser.ACTIVO})
  estado: EstadoUser.INACTIVO | EstadoUser.ACTIVO

  @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
  public created_at: Date;

  @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
  public updated_at: Date;

  @ManyToOne(() => Roles, roles => roles.usuario)
  roles: Roles

  @OneToMany(() => Pedidos, pedido => pedido.user)
  cliente: Pedidos[]

  @OneToOne(() => Repartidor)
  @JoinColumn() 
  repartidor: Repartidor
}