import Reviews from "../Models/Realtions.js";
import users from "../Models/Realtions.js";
import Product from "../Models/Realtions.js";

export const getallreviews = async (req, res) => {
  try {
    const review = await Reviews.findAll({
      include: [
        {
          model: users,
          as: "users", // Assuming you defined this alias in the association
        },
      ],
      include: [{ model: Product, as: "product" }],
    });
    res.json(review);
  } catch (error) {
    console.error("Failed to fetch review:", error);
    res.status(500).json({ error: "Failed to fetch review" });
  }
};

export const getreviewById = async (req, res) => {
  const { id } = req.params;
  try {
    const review = await Reviews.findByPk(id);
    if (!review) {
      return res.status(404).json({ error: "Articles not found" });
    }
    res.json(review);
  } catch (error) {
    console.error("Failed to fetch review:", error);
    return res.status(500).json({ error: "Failed to fetch review" });
  }
};

export const createreview = async (req, res) => {
  try {
    const { reviewsDetails, UserId } = req.body;
    const review = await Reviews.create({ reviewsDetails, UserId }).json;
    res.status(201).json(review);
  } catch (error) {
    console.error("Error creating review:", error);
    res
      .status(500)
      .json({ error: "Failed to create review", details: error.message });
  }
};

export const updatereview = async (req, res) => {
  const { id } = req.params;
  const { reviewsDetails, UserId } = req.body;
  try {
    const review = await Reviews.findByPk(id);
    if (!review) {
      return res.status(404).json({ error: "review not found" });
    }

    review.reviewsDetails = reviewsDetails;
    review.UserId = UserId;

    await review.save();
    res.json(review);
  } catch (error) {
    console.error("Failed to update review:", error);
    res.status(500).json({ error: "Failed to update review" });
  }
};

export const deletereview = async (req, res) => {
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
