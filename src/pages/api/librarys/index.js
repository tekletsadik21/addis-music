import Library from "@/models/Librarys";
import "@/lib/mongo/dbConnect";

export default async (req, res) => {
	const { method } = req;

	switch (method) {
		case "GET":
			try {
				const library = await Library.find({}).sort({
					createdAt: "desc",
				});

				return res.status(200).json({
					success: true,
					data: library,
				});
			} catch (error) {
				return res.status(400).json({
					success: false,
				});
			}
		case "POST":
			try {
				const library = await Library.create(req.body);
				return res.status(201).json({
					success: true,
					data: library,
				});
			} catch (error) {
				return res.status(400).json({
					success: false,
				});
			}
		default:
			res.setHeaders("Allow", ["GET", "POST"]);
			return res
				.status(405)
				.json({ success: false })
				.end(`Method ${method} Not Allowed`);
	}
};