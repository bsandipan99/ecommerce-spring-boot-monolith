package ecommerceApp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class InventoryService {
    @Autowired
    private InventoryRepository inventoryRepository;

    public void addInventory(Inventory inventory) {
        inventoryRepository.save(inventory);
    }

    public List<Inventory> getAllInventory() {
        return inventoryRepository.findAll();
    }

    public Inventory getInventoryByProductId(String productId) {
        return inventoryRepository.findById(productId).orElse(null);
    }

    public void updateInventory(String productId, int quantity) {
        Inventory inventory = inventoryRepository.findById(productId).orElse(null);
        inventory.setQuantity(quantity);
        inventoryRepository.save(inventory);
    }

    public void deleteInventory(String productId) {
        inventoryRepository.deleteById(productId);
    }
}
