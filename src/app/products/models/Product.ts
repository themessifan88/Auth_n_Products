export class Product<T>{
    id: string;
    name: string;
    rate: string;
    quality: string

    constructor(product:{name: string, rate: string, quality: string, id?: string}) {
        this.name = product.name;
        this.rate = product.rate,
            this.quality = product.quality;
        if (product.id)
            this.id = product.id;
        else
            this.id = this.randomString(6);
    }

    private randomString(length): string {
        var chars = '0123456789qazwsxedcrfvtgbyhnujmiklop';
        var result = '';
        for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
        return result;
    }
}