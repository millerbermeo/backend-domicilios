import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { EstadosPedidos } from "./estados-pedido.entity";
import { Repartidor } from "./repartidor.entity";
import { User } from "./user.entity";


@Entity()
export class Pedidos {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    fecha_pedido: string

    @Column({ nullable: true })
    fecha_entrega: string

    @Column({ nullable: true })
    direccion_entrega: string

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    public created_at: Date;

    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
    public updated_at: Date;

    @ManyToOne(() => EstadosPedidos, (estados) => estados.pedidos)
    estados: EstadosPedidos

    @ManyToOne(() => Repartidor, (repartidor) => repartidor.pedidos)
    repartidor: Repartidor[]

    @ManyToOne(() => User, user => user.cliente)
    user: User

}