package ecommerceApp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ProductService {
    @Autowired
    private ProductRepository productRepository;
    
    @Autowired
    private InventoryRepository inventoryRepository;

    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    public Product getProductById(String id) {
        return productRepository.findById(id).orElse(null);
    }

    public void addProduct(ProductRequest productRequest) {
        Product product = new Product();
        product.setId( productRequest.getId() );
        product.setTitle( productRequest.getTitle() );
        product.setPrice( productRequest.getPrice() );
        product.setThumbnail( productRequest.getThumbnail() );
        productRepository.save(product);

        Inventory inventory = new Inventory();
        inventory.setProductId( productRequest.getId() );
        inventory.setQuantity(productRequest.getQuantity() );
        inventoryRepository.save(inventory);
    }

    public void updateProduct(Product product) {
        productRepository.save(product);
    }

    public void deleteProductById(String id) {
        productRepository.deleteById(id);
        inventoryRepository.deleteById(id);
    }
}
