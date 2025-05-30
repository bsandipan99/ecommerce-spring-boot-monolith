package ecommerceApp;

import jakarta.persistence.Id;
import jakarta.persistence.Entity;

@Entity
public class OrderEntity {
    @Id
    private String id;
    private String productId;
    private int quantity;

    public void setOrderId(String id) {
        this.id = id;
    }

    public void setProductId(String productId) {
        this.productId = productId;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public String getId() {
        return id;
    }

    public String getProductId() {
        return productId;
    }

    public int getQuantity() {
        return quantity;
    }
}
