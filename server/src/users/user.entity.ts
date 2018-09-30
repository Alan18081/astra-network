import {Entity, Column, PrimaryGeneratedColumn, Index} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  firstName: string;

  @Column({ length: 255 })
  lastName: string;

  @Index({ unique: true })
  @Column({ unique: true, length: 255 })
  email: string;

  @Column({
    default: 'https://www.latimes.com/resizer/jd1uaiDEEYcUqSA6599FfHe-e8A=/1400x0/www.trbimg.com/img-5b76bdd1/turbine/la-1534508493-0ehdvdjrm3-snap-image'
  })
  avatar: string;

  @Column({
    default: 'https://www.popsci.com/sites/popsci.com/files/styles/1000_1x_/public/files/2018/05/star_black_hole.jpg?itok=gXoumeFr&fc=50,50'
  })
  background: string;

  @Column({ nullable: true })
  phone?: string;

  @Column({ nullable: true, length: 255 })
  status?: string;

  @Column({ nullable: true })
  info?: string;

  @Column({ length: 255, select: false })
  password: string;

  @Column({ length: 255 })
  birthday: string;

}