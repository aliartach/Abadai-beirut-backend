import {Product, Reviews, Users} from "../Models/Relations.js";

class ReviewsController{

static async getallreviews(req, res){
  try {
    const review = await Reviews.findAll({
      include: [
        {
          model: Users,
          as: "User",
        },
      ],
      include: [{ model: Product, as: "Product" }],
    });
    res.json(review);
  } catch (error) {
    console.error("Failed to fetch review:", error);
    res.status(500).json({ error: "Failed to fetch review" });
  }
};

static async getreviewById(req, res){
  const { id } = req.params;
  try {
    const review = await Reviews.findOne({
      where:{id}, 
      include: [
        {
          model: Users,
          as: "User",
        },
      ],
      include: [{ model: Product, as: "Product" }],
    });
    if (!review) {
      return res.status(404).json({ error: "Articles not found" });
    }
    res.json(review);
  } catch (error) {
    console.error("Failed to fetch review:", error);
    return res.status(500).json({ error: "Failed to fetch review" });
  }
};

static async createreview(req, res){
  try {
    const { reviewsDetails, UserId, ProductId } = req.body;
    console.log("crv" , req.body)
    const review = await Reviews.create({ reviewsDetails, UserId, ProductId });
    res.status(201).json(review);
  } catch (error) {
    console.error("Error creating review:", error);
    res
      .status(500)
      .json({ error: "Failed to create review", details: error.message });
  }
};

static async updatereview(req, res){
  const { id } = req.params;
  const { reviewsDetails, UserId, ProductId } = req.body;
  try {
    const review = await Reviews.findByPk(id);
    if (!review) {
      return res.status(404).json({ error: "review not found" });
    }

    review.reviewsDetails = reviewsDetails;
    review.UserId = UserId;
    review.ProductId = ProductId;

    await review.save();
    res.json(review);
  } catch (error) {
    console.error("Failed to update review:", error);
    res.status(500).json({ error: "Failed to update review" });
  }
};

static async deletereview(req, res){
  const { id } = req.params;
  try {
    const review = await Reviews.findByPk(id);
    if (!review) {
      return res.status(404).json({ error: "review not found" });
    }

    await review.destroy();
    res.json({ message: "review deleted successfully" });
  } catch (error) {
    console.error("Failed to delete review:", error);
    res.status(500).json({ error: "Failed to delete review" });
  }
};
}

export default ReviewsController;