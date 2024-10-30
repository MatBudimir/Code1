### Class

        export class Vector {
        x: number;
        y: number;

        constructor(_x: number, _y: number) {
            this.set(_x, _y)
        }

        public set(_x: number, _y: number): void {
            this.x = _x
            this.y = _y
        }

        scale(_factor: number): void {
            this.x *= _factor;
            this.y *= _factor;
        }

        add(_addend: Vector): void {
            this.x += _addend.x;
            this.y += _addend.y;
        }

        random(_min: number, _max: number): void {
            const length: number = _min + Math.random() * (_max - _min);
            const dir: number = Math.random() * 2 * Math.PI;

            this.set(Math.cos(dir), Math.sin(dir));
            this.scale(length);
        }

        copy(): Vector {
            return new Vector(this.x, this.y);
        }

        mag(): number {
            return Math.sqrt(this.x * this.x + this.y * this.y);
        }
    }
    
### Sub-Class

      export class Asteroid extends Moveable {
        type: number;
        size: number;

        constructor(_size: number, _pos?: Vector, _vel?: Vector, _type?: number) {
            super(_pos);

              move(_time: number): void {
            super.move(_time);
        }

### Arrays

            const animals: Animal[] = [];
            animals.push(new Dog("Barky", "Dog", "Bones", 2, "woof"));

### instanceof

            for (const player of moveables) {
            if (player instanceof Player) {
                player.move(1 / 50)
                player.draw();
            }
        }
