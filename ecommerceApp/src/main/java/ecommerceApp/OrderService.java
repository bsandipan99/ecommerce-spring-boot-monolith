package ecommerceApp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderService {
    @Autowired
    private OrderRepository orderRepository;
    
    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private InventoryRepository inventoryRepository; 

    public List<OrderEntity> getAllOrders() {
        return orderRepository.findAll();
    }

    public OrderEntity getOrderById(String id) {
        return orderRepository.findById(id).orElse(null);
    }

    public void addOrder(OrderEntity order) {
        Product product = productRepository.getReferenceById(order.getProductId());
        Inventory inventory = inventoryRepository.getReferenceById( product.getId() );

        if(inventory.getQuantity() < order.getQuantity()) {
            throw new RuntimeException("Product not present in enough quantity!!!");    
        } else {
            orderRepository.save(order);
            int updatedQuantity = inventory.getQuantity() - order.getQuantity();

            inventory.setQuantity(updatedQuantity);
            inventoryRepository.save( inventory );
        }
    }
}
