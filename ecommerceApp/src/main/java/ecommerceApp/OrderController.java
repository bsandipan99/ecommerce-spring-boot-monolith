package ecommerceApp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/orders")
public class OrderController {
    @Autowired
    private OrderService orderService;

    @GetMapping
    public List<OrderEntity> getAllOrders() {
        return orderService.getAllOrders();
    }

    @GetMapping("/{id}")
    public OrderEntity getOrderById(@PathVariable String id) {
        return orderService.getOrderById(id);
    }

    @CrossOrigin(origins = "https://ecommerce-frontend-ten-fawn.vercel.app/")
    @PostMapping
    public void addOrder(@RequestBody OrderEntity order) {
        orderService.addOrder(order);
    }
}
