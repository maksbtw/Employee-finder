import teamData from "../data";

export async function GET(request, { params }) {
    const member = teamData.find(item => item.id === Number(params.id));

    if (!member) {
        return new Response(JSON.stringify({ error: 'Not found' }), { status: 404 });
    }

    return new Response(JSON.stringify(member));
}

