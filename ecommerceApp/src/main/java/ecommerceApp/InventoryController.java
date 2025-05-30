package ecommerceApp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/inventory")
public class InventoryController {
    @Autowired
    private InventoryService inventoryService;

    @GetMapping
    public List<Inventory> getAllInventory() {
        return inventoryService.getAllInventory();
    }

    @GetMapping("/{productId}")
    public Inventory getInventoryByProductId(@PathVariable String productId) {
        return inventoryService.getInventoryByProductId(productId);
    }

    @PutMapping("/{productId}")
    public void updateInventory(@PathVariable String productId,@RequestBody int quantity) {
        inventoryService.updateInventory(productId, quantity);
    }

    @DeleteMapping("/{productId}")
    public void deleteInventory(@PathVariable String productId) {
        inventoryService.deleteInventory(productId);
    }

    @PostMapping
    public void addInventory(@RequestBody Inventory inventory) {
        inventoryService.addInventory(inventory);
    }
}
