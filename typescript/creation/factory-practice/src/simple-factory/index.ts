interface Product {
  name: string;
  price: number;
}

type CouponType = "CATEGORY" | "PRODUCT";

class CouponFactory {
  constructor() {}

  // 각 쿠폰에 대한 상세한 Field를 전달하기 어려움
  // couponType이 추가될 때마다 분기 처리 해줘야 함.
  // OCP 원칙에 위베 됨.
  // 따라서 디자인 패턴으로 취급되지 않음.
  createCoupon(couponType: CouponType): Coupon {
    switch (couponType) {
      case "CATEGORY":
        return new CategoryCoupon();
      case "PRODUCT":
        return new ProductCoupon();
      default:
        throw new Error(`${couponType} is not CouponType.`);
    }
  }
}

abstract class Coupon {
  abstract apply(product: Product): void;
  protected abstract canApply(product: Product): boolean;
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
    const productCoupon = couponFactory.createCoupon("PRODUCT");

    const categoryCoupon = couponFactory.createCoupon("CATEGORY");
    console.log("Check", productCoupon);
    console.log("Check", categoryCoupon);
  }
}
