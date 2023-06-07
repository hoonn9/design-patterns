interface Product {
  name: string;
  price: number;
}

interface CouponCreator<T extends Coupon> {
  generate(): T;
}

class CouponFactory {
  // 각 쿠폰에 대한 정보를 Creator에 저장 후 전달하기 용이함
  createCoupon<T extends Coupon>(couponCreator: CouponCreator<T>): T {
    return couponCreator.generate();
  }
}

abstract class Coupon {
  abstract apply(product: Product): void;
  protected abstract canApply(product: Product): boolean;
}

class CategoryCouponCreator implements CouponCreator<CategoryCoupon> {
  generate(): CategoryCoupon {
    return new CategoryCoupon();
  }
}

class CategoryCoupon extends Coupon {
  private targetCategories: string[] = [];

  apply(product: Product) {
    console.log(`Product: ${product.name} was applied Coupon: ${this}`);
  }

  protected canApply(product: Product) {
    return this.targetCategories.some((targetCategory) => targetCategory === product.name);
  }

  addCategory(category: string) {
    this.targetCategories.push(category);
  }
}

class ProductCouponCreator implements CouponCreator<ProductCoupon> {
  generate(): ProductCoupon {
    return new ProductCoupon();
  }
}

class ProductCoupon extends Coupon {
  private targetProducts: string[] = [];

  apply(product: Product): void {
    if (this.canApply(product)) {
      console.log(`Product: ${product.name} was applied coupon: ${this}`);
      return;
    }
    console.log(`Product: ${product.name} is not in targetProducts`);
  }

  protected canApply(product: Product) {
    return this.targetProducts.some((targetProduct) => targetProduct === product.name);
  }

  addProduct(name: string) {
    this.targetProducts.push(name);
  }
}

export class SimpleFactoryPattern {
  static run() {
    const couponFactory = new CouponFactory();
    const productCoupon = couponFactory.createCoupon(new ProductCouponCreator());

    const categoryCoupon = couponFactory.createCoupon(new CategoryCouponCreator());
    console.log("Check", productCoupon);
    console.log("Check", categoryCoupon);
  }
}
